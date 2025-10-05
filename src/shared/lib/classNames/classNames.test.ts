import { classNames } from "./classNames.js"

describe('classNames', ()=> {
    test('with only first param', () => {
        expect(classNames('some class')).toBe('some class')
    });
     test('with additional class', () => {
        const expected = 'some class class1 class2'
        expect(classNames('some class', ['class1', 'class2'])).toBe(expected)
    });
     test('with mods', () => {
        const expected = 'some class class1 class2 hovered scrollable'
        expect(classNames('some class', ['class1', 'class2'], {hovered: true, scrollable: true})).toBe(expected)
    });
       test('with mods false', () => {
        const expected = 'some class class1 class2 scrollable'
        expect(classNames('some class', ['class1', 'class2'], {hovered: false, scrollable: true})).toBe(expected)
    });
     
})
