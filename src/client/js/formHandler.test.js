import 'regenerator-runtime/runtime'
import { handleSubmit } from "./formHandler"
import { getMood } from "./formHandler"

global.fetch = jest.fn()

describe("formHandler", () => {
    test("Testing the handleSubmit function", () => {
        expect(handleSubmit).toBeDefined();
    }),
    test("Testing the getMood function", () => {
        let key = 'myKey'
        let usrTxt = 'I like dogs'
        const str = `https://api.meaningcloud.com/sentiment-2.1?key=${key}&lang=en&txt=${usrTxt}`

        getMood(usrTxt, key)
        expect(global.fetch).toHaveBeenCalledWith(str)
    })
})
