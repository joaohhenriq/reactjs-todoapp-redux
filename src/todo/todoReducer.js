const INITIAL_STATE = {
    description: 'Blabla',
    list: [{
        _id: 1,
        description: 'Pay the bills',
        done: true
    }, {
        _id: 2,
        description: 'Go to the doctor',
        done: false

    }, {
        _id: 3,
        description: 'Go to the park',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state
    }
}