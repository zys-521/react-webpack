export const TEST_REDUX = 'test'

export function createTestAction(data){
    return {
        type: TEST_REDUX,
        data
    }
}
