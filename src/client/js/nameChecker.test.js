import { checkForName } from "./nameChecker"

describe("nameChecker", () => {
    test("Testing checkForName Found", () => {
        global.alert = jest.fn()
        checkForName('Kirk')
        expect(global.alert).toHaveBeenCalledWith("Welcome, Captain!");
    })
    test("Testing checkForName Not Found", () => {
        global.alert = jest.fn()
        checkForName('Freddie');
        expect(global.alert).not.toHaveBeenCalled();
    })
})
