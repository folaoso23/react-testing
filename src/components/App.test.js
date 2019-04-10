import React from 'react';
import { shallow } from 'enzyme';
import GiftList from './GiftList';

describe("GiftList", () => {

    let wrapper;

    it("renders <GiftList />", () => {
        wrapper = shallow(<GiftList/>);

        expect(wrapper.exists()).toEqual(true);

    });

    describe("app title", () =>
    {
        wrapper = shallow(<GiftList/>);

        it("app title is correct", () => {
            const appTitle = wrapper.find("[data-app-title]");

            expect(appTitle.text()).toBe("Gift Giver");
        })
    });

    describe("user input", () => {
        wrapper = shallow(<GiftList/>);

        it("name input box exists", () => {
            const nameInputBox = wrapper.find("#data-recipient-input-box");

            expect(nameInputBox.props().placeholder).toEqual("name of gift recipient");
        });

        it("placeholder for name input box is correct", () => {
            const nameInputBox = wrapper.find("#data-recipient-input-box");

            expect(nameInputBox.props().placeholder).toEqual("name of gift recipient");
        });

        it("gift input box exists", () => {
            const giftInputBox = wrapper.find("#data-gift-input-box");

            expect(giftInputBox.exists()).toBe(true);
        });

        it("placeholder for gift input box is correct", () => {
            const nameInputBox = wrapper.find("#data-gift-input-box");

            expect(nameInputBox.props().placeholder).toEqual("what's the gift?");
        });

    });

    describe("add gift button", () => {
        wrapper = shallow(<GiftList/>);
        // let addGiftButton = wrapper.find("#data-add-gift-button");

        it("button exists", () => {
            const addGiftButton = wrapper.find("#data-add-gift-button");
            expect(addGiftButton.exists()).toBe(true);
        });

        it("button is disabled", () => {
            const addGiftButton = wrapper.find("#data-add-gift-button");
            expect(addGiftButton.props().disabled).toBe(true);
        });

        it("button is enabled when name input and gift input box contain valid input from user", () => {

            const nameInputBox = wrapper.find("#data-recipient-input-box");
            const giftInputBox = wrapper.find("#data-gift-input-box");


            const nameInputEvent = {
                target: {
                    value: "Fola"
                }
            };

            const giftInputEvent = {
                target: {
                    value: "Skittles"
                }
            };

            nameInputBox.simulate('change', nameInputEvent);
            giftInputBox.simulate('change', giftInputEvent);
            const addGiftButton = wrapper.find("#data-add-gift-button");
            expect(addGiftButton.props().disabled).toBe(false);


        });

         it("user input is removed when submit button is clicked", () =>
         {
             var nameInputBox = wrapper.find("#data-recipient-input-box");
             var giftInputBox = wrapper.find("#data-gift-input-box");


             const nameInputEvent = {
                 target: {
                     value: "Fola"
                 }
             };

             const giftInputEvent = {
                 target: {
                     value: "Skittles"
                 }
             };

             nameInputBox.simulate('change', nameInputEvent);
             giftInputBox.simulate('change', giftInputEvent);

             const addGiftButton = wrapper.find("#data-add-gift-button");
             addGiftButton.simulate('click');

             nameInputBox = wrapper.find("#data-recipient-input-box");
             giftInputBox = wrapper.find("#data-gift-input-box");

             expect(nameInputBox.props().value).toEqual("");
             expect(giftInputBox.props().value).toEqual("");


         });

        it("recipient and gift are added to the list", () =>
        {
            var nameInputBox = wrapper.find("#data-recipient-input-box");
            var giftInputBox = wrapper.find("#data-gift-input-box");
            // var recipientGiftList = wrapper.find("#data-recipient-gift-list");
            var addGiftButton = wrapper.find("#data-add-gift-button");


            const nameInputEvent = {
                target: {
                    value: "Fola"
                }
            };

            const giftInputEvent = {
                target: {
                    value: "Skittles"
                }
            };

            const nameInputEvent2 = {
                target: {
                    value: "Oso"
                }
            };

            const giftInputEvent2 = {
                target: {
                    value: "Warheads"
                }
            };


            nameInputBox.simulate('change', nameInputEvent);
            giftInputBox.simulate('change', giftInputEvent);
            nameInputBox.simulate('change', nameInputEvent2);
            giftInputBox.simulate('change', giftInputEvent2);

            addGiftButton.simulate('click');

            var recipientGiftList = wrapper.find("#data-recipient-gift-list");

            expect(recipientGiftList.childAt(0).props().value).toEqual("Fola | Skittles");
            expect(recipientGiftList.childAt(1).props().value).toEqual("Oso | Warheads");






        });
    });



});