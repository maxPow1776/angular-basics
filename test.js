import { Selector } from 'testcafe'

fixture('Test').page('http://localhost:4200')

test('filter-cats-test', async t => {
    const animals = Selector('app-animal')
    await t
        .expect(animals.count).eql(6)
        .click("#filter-cats")
        .expect(animals.count).eql(3)
        .click("#filter-cats")
        .expect(animals.count).eql(6)
})

test('create-animal-test', async t => {
    await t
        .click('#create-animal')
        .typeText('#type-input', 'Test type')
        .typeText('#name-input', 'Test name')
        .click('#send-button')
    Selector('.main-text').withText('Test type')
})

test('edit-animal-test', async t => {
    const editButton = Selector('#edit-button').nth(-1)
    await t
        .click(editButton)
        .click('#edit-name')
        .pressKey('ctrl+a delete')
        .typeText('#edit-name', 'Test edit name')
        .click('#edit-age')
        .typeText('#edit-age', '2')
        .click('#done-button')
    Selector('.main-text').withText('Test edit name')
})

test('delete-animal-test', async t => {
    const deleteButton = Selector('#delete-button').nth(-1)
    await t
        .click(deleteButton)
})