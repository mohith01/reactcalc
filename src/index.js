import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Square extends React.Component{
    render(){
        return (
            <button className="squares" onClick={()=>this.props.onClick()}>{this.props.value}</button>
        )
    }
}
class Textbox extends React.Component{
    render(){
        return (
            <input type="text" value={this.props.value}  disabled/>
        )
    }
}
class App extends React.Component {
    state = {
        value:'',
        string1:'',
    }
    //handleClick(i){ }
    renderSquare(i){
        return <td><Square value={i} onClick={()=>this.handleClick(i)}/></td>
    }
    handleClick(i){
        const string1=this.state.string1;
        if (i==='C'){
            this.setState({value:'',string1:''})
        }
        else if (i==='='){
            this.setState({value:eval(string1).toString(),string1:eval(string1).toString()})
        }
        else{
            const string1 = this.state.string1+i.toString();
            this.setState({value:string1,string1:string1})
        }
        
    }
    render(){
        return (
            <div className="Calc">
                <table>
                    <tr>
                        <td colspan="4"><Textbox value={this.state.value}  /></td>
                    </tr>
                    <tr>
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                        {this.renderSquare(3)}
                        {this.renderSquare('+')}
                    </tr>
                    <tr>
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                        {this.renderSquare(6)}
                        {this.renderSquare('-')}
                    </tr>
                    <tr>
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                        {this.renderSquare(9)}
                        {this.renderSquare('*')}
                    </tr>
                    <tr>
                        {this.renderSquare('C')}
                        {this.renderSquare(0)}
                        {this.renderSquare('=')}
                        {this.renderSquare('/')}
                    </tr>
                </table>
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('root'))