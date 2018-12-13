import React, { Component } from 'react'
import './SearchBox.css'

export default class SearchBox extends Component {
  render() {
    return (
      <div>
      <div className="container">
      <div className="main">
      <blockquote className="blockquote text-center">
        <h1 className="title mb-0"><i className="fas fa-film fa-1x"></i> Movie World</h1>
        <footer className="blockquote-footer">best place to know about movies</footer>
      </blockquote>
      <form role="form" id="form-buscar">
      <div className="form-group">
      <div className="input-group">
      <input id="1" className="form-control" type="text" name="search" placeholder="Search..." required/>
      <span className="input-group-btn">
      <button className="btn btn-success" type="submit">
      <i className="fas fa-search" aria-hidden="true"></i> Search
      </button>
      </span>
      </div>
      </div>
      </form>
      </div>
      </div>
      </div>
    )
  }
}
