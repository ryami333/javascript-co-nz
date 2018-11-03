// @flow

import React, { Fragment, PureComponent, type Node } from 'react';
import Reset from './Reset';

type LayoutProps = {
    children: Node,
};

export default class Layout extends PureComponent<LayoutProps> {
    render() {
        const { children } = this.props;
        return (
            <Fragment>
                <Reset />
                {children}
            </Fragment>
        );
    }
}
