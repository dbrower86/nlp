import { is_url } from "./nameChecker"
global.alert = jest.fn()

describe("is_url", () => {
    test("Testing valid URL", () => {
        expect(is_url('www.google.com')).toBeTrue
    })
    test("Testing invalid URL", () => {
        expect(is_url('bob@google.com')).toBeFalse
    })
})
