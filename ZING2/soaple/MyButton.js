// 리액트의 함수 컴포넌트
function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement('button', { onClick: () => setIsClicked(true) }, isClicked ? 'Clicked!' : 'Click here!');
}

// 리액트 컴포넌트를 DOM 컨테이너에 렌더링링
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);
