import { store } from './store';
import { decrement, increment } from './counterSlice';

const APP = document.getElementById('app') as HTMLElement;

function render() {
    const state = store.getState();
    const appHtml = `
        <h1> ${state.counter.value} </h1>
        <div id="update-count-container">
            <div id="decrement">
                Decrement!
            </div>
            <div id="increment">
                Increment!
            </div>
        </div>
    `;
    APP.innerHTML = appHtml;
    (document.getElementById("decrement") as HTMLElement).addEventListener("click", () => store.dispatch(decrement()));
    (document.getElementById("increment") as HTMLElement).addEventListener("click", () => store.dispatch(increment()));
}

store.subscribe(render);

render();
