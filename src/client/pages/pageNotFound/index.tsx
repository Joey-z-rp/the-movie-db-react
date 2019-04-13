import * as React from 'react';
import { Message } from 'semantic-ui-react';

const PageNotFound: React.FunctionComponent = () => (
    <Message size="huge">
        <Message.Header>Sorry, the page you are looking for does not exist</Message.Header>
        <p>Please check the address and try again.</p>
    </Message>
);

export default PageNotFound;
