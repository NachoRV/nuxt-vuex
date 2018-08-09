/**
 * Las mutaciones son las únicas que DEBEN  modificar el estado (por tenerlo todo centralizado y eso)
 */
const mutations = {
    increment(state) {
        state.counter++
    }
}

export default mutations