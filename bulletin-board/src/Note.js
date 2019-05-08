import React, {Component} from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'

class Note extends Component {
	constructor(props) {
		super(props)
		this.state = {
			editing: false
		}
		this.edit = this.edit.bind(this)
		this.save = this.save.bind(this)
		this.remove = this.remove.bind(this)
		this.renderForm = this.renderForm.bind(this)
		this.renderDisplay = this.renderDisplay.bind(this)
		this.randomBetween = this.randomBetween.bind(this)
	}
    ComponentWillMount(){
		this.style ={
		right : this.randomBetween(0,window.innerWidth-150,'px'),
		top : this.randomBetween(0,window.innerWidth-150,'px'),
		transform: `rotate(${this.randomBetween(-25, 25, 'deg')})`
		}
	}
	randomBetween(x,y,s){
		return x + Math.ceil(Math.random()* (y-x)) +s
	}
	componentDidUpdate(){
	var textArea
	if(this.state.editing){
	   textArea = this._newText
	   textArea.focus()
	   textArea.select()
	}
	}

	shouldComponentUpdate(nextprops, nextState){
		return(
			this.props.children !== nextprops.children || this.state !== nextState
		)
	}

	edit() {
		this.setState({
			editing: true
		})
	}
	remove() {
		this.props.onRemove(this.props.index)
	}

	save(e) {
		e.preventDefault()
		this.props.onChange(this._newText.value,this.props.index)
		this.setState({
        editing : false
		})
		
	}
	



	renderForm() {
		return (
			<div className="note">
				<form>
					<textarea ref={input => this._newText = input}/>
					<button onClick={this.save}><FaFloppyO /></button>
				</form>
			</div>
		)
	}

	renderDisplay() {
		return (
			<div className="note">
				<p>{this.props.children}</p>
				<span>
					<button onClick={this.edit} id="edit"><FaPencil /></button>
					<button onClick={this.remove} id="remove"><FaTrash /></button>
				</span>
			</div>
		)
	}

	render() {
		return this.state.editing ? this.renderForm() : this.renderDisplay()
	}

}

export default Note





