//리액트의 rendering속성을 이용하기 위해 상속
class Hello extends React.Component{
  render() {
    //{}안은 javascript코드
    return <h1>Hello, {this.props.nickname}</h1>
  }
}

//ReactDOM.render(element, container[, callback])
ReactDOM.render(
  //컴포넌트 사용
  //펭수 문자열이 위의 this.props.nickname에 들어감
  <Hello nickname='펭수'/>,
  document.getElementById('root')
);