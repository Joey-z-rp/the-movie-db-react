import * as React from 'react';
import { Message } from 'semantic-ui-react';
import { ErrorMessageWrapper } from './style';

const ErrorMessage: React.FunctionComponent = () => (
    <ErrorMessageWrapper>
        <Message
            color="red"
            negative
            size="big"
        >
            <Message.Header>Sorry, there was an error</Message.Header>
            <p>Please refresh the page and try again.</p>
        </Message>
    </ErrorMessageWrapper>
);

export default ErrorMessage;
