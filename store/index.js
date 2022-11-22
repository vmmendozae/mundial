export const state = () => ({
    data: [],
    lastMatch: 0,
    results: []
})

export const mutations = {
    changeData(state, input) {
        state.data = input
    },
    changeLastMatch(state, input) {
        state.lastMatch = input
    },
    changeResults(state, input) {
        state.results = input
    }
}

export const getters = {
    podium: (state) => {
        const data = [...state.data]

        data.sort(function (a, b) {
            return b.total - a.total;
        });
        return data
    },
    ranking: (state) => {
        let data = [...state.data]
        const ranking = []
        state.data.forEach((e, index) => {
            data.sort(function (a, b) {
                return b.acomulado[index] - a.acomulado[index];
            });
            const d = data.map(e => {
                return { name: e.name, points: e.acomulado[index] }
            })
            ranking.push(d)
        })
        return ranking
    },
    personalRanking: (state, getters) => {
        let generalRanking = []
        state.data.forEach((person, index) => {
            let ranking = []
            getters.ranking.forEach((rank, idx) => {
                const aux = rank.find(e => e.name == person.name)

                let position = rank.indexOf(aux)
                ranking.push(
                    position
                )
            })
            generalRanking.push({ name: person.name, rank: ranking })
        })
        return generalRanking
    }
}

export const actions = {
    async fetchData({ commit }) {
        const APIKey = "AIzaSyAXo_wied5yhzwmH76Til0oAyGhx7jxKFE"
        const idSheet = "1mPayIzA-nwIaN3N7gkKfwczk1MI39MmAMN0PrQHg6gE"
        const url =
            "https://content-sheets.googleapis.com/v4/spreadsheets/" +
            idSheet +
            "/values/Tabla!A3:BP28?access_token=" +
            APIKey +
            "&key=" +
            APIKey;
        const { data } = await this.$axios.get(url);

        const cleanData = data.values.map((e, index) => {
            const results = e.slice(1, e.length)
            let total = 0

            results.forEach(t => {
                total += parseInt(t)
            })

            let acomulado = []
            results.forEach((r, i) => {
                if (i == 0) {
                    acomulado.push(parseInt(r))
                } else {
                    acomulado.push(parseInt(r) + parseInt(acomulado[i - 1]))
                }
            })

            return {
                id: index,
                name: e[0],
                results: results.map(e => parseInt(e)),
                acomulado: acomulado,
                total
            }
        })

        commit('changeData', cleanData)
    },
    async fetchLastMatch({ commit }) {
        const APIKey = "AIzaSyAXo_wied5yhzwmH76Til0oAyGhx7jxKFE"
        const idSheet = "1mPayIzA-nwIaN3N7gkKfwczk1MI39MmAMN0PrQHg6gE"
        const url =
            "https://content-sheets.googleapis.com/v4/spreadsheets/" +
            idSheet +
            "/values/Resultados!A2:B68?access_token=" +
            APIKey +
            "&key=" +
            APIKey;
        const { data } = await this.$axios.get(url);

        const LM = parseInt(data.values.find(e => !e[1])) - 1

        commit('changeLastMatch', LM)

        const results = data.values.map(r => {
            return {
                played: !!r[1],
                winner: !!r[1] ? r[1] : undefined
            }
        })
        commit('changeResults', results)
    }

}