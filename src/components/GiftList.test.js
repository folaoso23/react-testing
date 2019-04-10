import React from 'react';
import { shallow } from 'enzyme';
import GiftList from './GiftList';
import CarGiver from './CarGiver';
import {Router, Route, Link} from 'react-router-dom'
import axios from 'axios'


describe("GiftList", () => {

    //GiftList.test.js
    jest.mock('axios', () => {
        return {
            get: jest
                .fn(() => Promise.resolve({ data: [] }))
                .mockImplementationOnce(() => Promise.resolve({
                    data: [
                        {id: "55", person: "Ms. Frizzle", giftName: "THD gift card"}
                    ]
                }))
        }
    });

    describe("app routing", () => {
        let routes;
        let links;

        const wrapper =shallow(<GiftList/>);
        it('routes to the CarGiver component', () =>  {
            routes = wrapper.find(Route);

            expect(routes.at(0).props().path).toEqual("/car-giver");
            expect(routes.at(0).props().component).toEqual(CarGiver);
        });

        it('link actually works', () => {
            links = wrapper.find(Link);

            expect(links.at(0).props().to).toEqual("/car-giver");
        });

    });

    describe("when route is called", () =>
    {


        it("", () =>
        {

        });
    });

});