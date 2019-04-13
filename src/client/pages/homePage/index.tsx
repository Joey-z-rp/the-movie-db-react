import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state: any): any => ({
});

const mapDispatchToProps = (dispatch): any => ({
});

class HomePage extends React.Component<any> {
    render() {
        return (
            <div>Home Page</div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
