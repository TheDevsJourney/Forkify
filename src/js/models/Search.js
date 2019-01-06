import axios from 'axios';
import {key} from '../config';

export default class Search{
    
    constructor(query){
        this.query = query;
    };

    async getResults(){
        // const key = '0b9a49c25567210ee25fb0f348558e31'
        try{
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}
            `);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch(error){
            alert(error);
        };
    };
};