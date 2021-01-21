import React from 'react';

export default class ErrorPage extends React.Component {
    render() {
        return (
            <div>
                <p className="errpage" style={{textAlign: 'center', alignItems: 'center' ,fontSize: '55px', color: 'red'}}>
                    404 Not Found
                </p>
            </div>
        )
    }
}
