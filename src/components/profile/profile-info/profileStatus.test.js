import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./profileStatus";

describe('ProfileStatusWithHooks component', () => {

    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='testoviy status' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('testoviy status');
    })

    test('span exists', () => {
        const component = create(<ProfileStatus status='testoviy status' />);
        const root = component.root;
        expect(root.findByType('span')).not.toBeNull();
    })

    test('after creation input should not be displayed', () => {
        const component = create(<ProfileStatus status='testoviy status' />);
        const root = component.root;
        expect(() => {
            const input = root.findByType('input');
        }).toThrow();
    })

    test('span exists with correct status', () => {
        const component = create(<ProfileStatus status='testoviy status' />);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.children[0]).toBe('testoviy status');
    })

    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status='testoviy status' />);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe('testoviy status');
    })

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='testoviy status' updateStatus={ mockCallback }/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();

        expect(mockCallback.mock.calls.length).toBe(1);
    })
})