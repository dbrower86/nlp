//import 'regenerator-runtime/runtime'
import { handleSubmit } from "./formHandler"

//global.fetch = jest.fn()

describe("formHandler", () => {
    test("Testing the handleSubmit function", () => {
        expect(handleSubmit).toBeDefined();
    })
})
