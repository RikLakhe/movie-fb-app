import React, { Component } from 'react'
import LoadMore from '../loadmore/LoadMore'
import ColumnAll from '../columnall/ColumnAll'
import HomeImg from '../homeimg/HomeImg'
import SearchBox from '../searchbox/SearchBox'

import  './HomePage.css'




export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
      <SearchBox></SearchBox>
      <HomeImg></HomeImg>
      <ColumnAll></ColumnAll>
      <LoadMore></LoadMore>
      </div>
    )
  }
}
