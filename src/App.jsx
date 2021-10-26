import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
   this.state = { name: "",
    content: "",
    posts: [
      { name: "Drew", content: "dril tweets" },
      { name: "Garrett", content: "heaven-piercing giga drill" },
      { name: "Sam", content: "come see my show" },
    ]}
  }
    

    handleNameChange = (e) => this.setState({name: e.target.value});
    handleContentChange = (e) => this.setState({content: e.target.value});
    handleClick = () => {
      const newPost = {
        name: this.state.name,
        content: this.state.content,
      };

      this.setState({posts: [...this.state.posts, newPost]});
    };

render() {
    return (
      <main className="container">
        <section className="row justify-content-center mt-5">
          <div className="col-md-7">
            <h1 className="justify-content-center">Chirper</h1>
            <label htmlFor="username-input"><strong>Who are you?</strong></label>
            <input
              type="text"
              name="username-input"
              id=""
              value={this.state.name}
              onChange={this.handleNameChange}
              className='form-control'
            />
            <label htmlFor="content-input"><strong>What do you want to say?</strong></label>
            <textarea
              name="content-input"
              id=""
              cols="30"
              rows="10"
              value={this.state.content}
              onChange={this.handleContentChange}
              className='form-control'
            ></textarea>
            <button onClick={this.handleClick} className="button btn-primary mt-3">Submit</button>
          </div>
          <div id="timeline-container" className="container row">
            {this.state.posts.map((post, index) => (
              <div key={index}>
                <div className="container">{post.name}</div>
                <p className="container">{post.content}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }
}
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       task: "",
//       todos: []
//     };

//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     console.log(this.state.task)
//     this.setState({ task: '', todos: [...this.state.todos, { id: 1, task: this.state.task}]})
//   }
//   render() {
//     return (
//       <main className="container">
//         <section className="row justify-content-center mt-5">
//           <div className="col-md-7">
//             <form className="form-group">
//               <label>Task:</label>
//               <input
//                 value={this.state.task}
//                 onChange={(e) => this.setState({ task: e.target.value })}
//                 className="form-control"
//               />
//               <button onClick={e => this.handleSubmit(e)} className="btn btn-primary mt-3">
//                 Add Todo Task
//               </button>
//             </form>
//           </div>
//         </section>
//         <section className="row justify-content-center mt-3">
//           <div className="col-md-6">
//             <ul className="list-group">
//               {this.state.todos.map(todo => (
//                 <li className='list-group-item' key={`todo-task-${todo.id}`}>{todo.task}</li>
//               ))}
//             </ul>
//           </div>
//         </section>
//       </main>
//     );
//   }
// }

export default App;
