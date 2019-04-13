import * as React from 'react';
import { memo } from 'react';
import { Dimmer, Loader as LoaderComponent } from 'semantic-ui-react';
import { ILoaderProps } from '../../interfaces/components/loader';

const Loader: React.FunctionComponent<ILoaderProps> = props => (
    <React.Fragment>
        <Dimmer active={props.active}>
            <LoaderComponent />
        </Dimmer>
    </React.Fragment>
);

export default memo(Loader);
