export default class ShopItemModel {
    constructor(entity) {
        Object.assign(this, {
            brand: 'test',
            title: '',
            description: '',
            descriptionFull: '',
            price: 0,
            currency: '',
        }, entity);
    }
}