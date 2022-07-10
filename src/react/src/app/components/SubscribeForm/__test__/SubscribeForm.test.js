import { render, cleanup, screen } from "@testing-library/react";
import SubscribeForm from "../SubscribeForm";


describe('SubscribeForm initiated', () => {
    afterEach(() => {
        cleanup();
    })

    it('should component renders', () => {
        render(<SubscribeForm />);
        const elem = screen.getByTestId("container");
        expect(elem).toBeInTheDocument();
    })

    it('Should be disabled button if email input is empty', () => {
        const emailInput = screen.getByTestId("email");
        expect(emailInput).toHaveValue("");
    })
})
