import React ,{useEffect, useState} from 'react';
import Vis from 'react-visibility-sensor';
import './App.scss';

export default class Details extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            target: "services",
            sections:{
                services:true,
                experience:false,
                contact:false
            }
        };

        //creates a reference for your element to use
        this.sections =['services','experience','contact']; 
        this.sections.forEach(section=>{
                this[section] = React.createRef();
        });
        this.parent = React.createRef();
        this.handleOnClick = this.handleOnClick.bind(this);

    }


    handleOnClick = (target, event) => {
        event.preventDefault();
        if (this[target].current) {
            this[target].current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }
    }
    onChange = (isVisible, section) => {
        this.setState({target:section});
      }

    render() {
        return (
            <div className="details" ref={this.parent}>
                <div className="nav-bar">
                {this.sections.map(section=>{
                      return (
                        <div className="nav-item">
                            <a onClick={(e) => {
                                this.handleOnClick(section, e);
                                this.setState({ target: section });
                                }}>  <span className={this.state.target == section? 'active' :'hidden'}>{"{ "}</span>{section}<span className={this.state.target == section? 'active' :'hidden'}>{" }"}</span>
                            </a>
                        </div>
                      );  
                    })}
                </div>

                <div style={{ backgroundColor: 'white' }}>
                    {this.sections.map(section=>{
                      return (
                        <Vis onChange={(event)=>{
                            this.onChange(event,section)
                        }}>

                        <section key={section.toString()} className="sections" ref={this[section]}>
                            {section}
                        </section>
                        </Vis>

                      );  
                    })}
                   
                </div>
            </div>

        );
    }
}
