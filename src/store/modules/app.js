import axios from "axios";
// import {getBrandList} from '../../api/index'
import { getMakeList } from "../../api/index";
let state = {
  list: [],
  num: 1,
  letters: "",
  isShow: false,
  brandId: "",
  makeList: "",
  isShowList : false
};

let getters = {};

let mutations = {
  showLetter: (state, payload) => {
    state.isShow = payload;
  },
  changeLetter: (state, payload) => {
    state.letters = payload;
  },
  changeMakeList: (state, payload) => {
    state.brandId = payload.id;
    state.makeList = payload.list;
    console.log(state.makeList)
    state.isShowList = true;
  },
  hideMakeList : (state,payload)=>{
    state.isShowList = false;
  },
  showMakeList : (state)=>{
    state.isShowList = true
  }
};
let actions = {
  listCar: (context, payload) => {
    return axios.get("/listCar").then(res => {
      return res;
    });
  },
  getMakeList: ({ commit, state }, payload) => {
    if (payload != state.brandId) {
      getMakeList(payload).then(body => {
        commit("changeMakeList", {
          id: payload,
          list: body.data
        });
      });
    }else{
      // commit('showMakeList')
    }
  }
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
