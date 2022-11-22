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
            return {
                id: index,
                name: e[0],
                results: results.map(e => parseInt(e)),
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