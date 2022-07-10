import { cleanup, render, screen } from "@testing-library/react"
import renderer from "react-test-renderer";
import Todo from "../Todo";
describe('Todo component initaited', () => {



    afterEach(() => {
        cleanup();
    })

    test('should render non-completed todo', () => {
        const todo = { id: 1, title: "wash dishes", completed: false };
        render(<Todo todo={todo} />);

        const todoElem = screen.getByTestId('todo-1');
        expect(todoElem).toBeInTheDocument();
        expect(todoElem).toHaveTextContent('wash dishes');
        expect(todoElem).not.toContainHTML('<strike>');
    })

    test('should render completed todo', () => {
        const todo = { id: 2, title: "wash car", completed: true };
        render(<Todo todo={todo} />);

        const todoElem = screen.getByTestId('todo-2');
        expect(todoElem).toBeInTheDocument();
        expect(todoElem).toHaveTextContent('wash car');
        expect(todoElem).toContainHTML('<div data-testid="todo-2"><strike><h1>wash car</h1></strike></div>');
    })

    test('match snapshot', () => {
        const todo = { id: 1, title: "wash dishes", completed: false };
        const tree = renderer.create(<Todo todo={todo} />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})
