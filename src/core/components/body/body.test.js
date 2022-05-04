import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store.redux";
import Body from "./body.component";

test('If body component has content inside', () => {
    render(<Provider store={store}><Body /></Provider>);
    const bodyWrapperElem = screen.getByTestId('body-content');
    expect(bodyWrapperElem).toBeTruthy();
    expect(bodyWrapperElem).toBeInTheDocument();
    expect(bodyWrapperElem).not.toBeUndefined();
});