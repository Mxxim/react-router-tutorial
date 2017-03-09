/**
 * Created by sammy on 17/3/9.
 */
import React from 'react'

export default  React.createClass({
    render() {
        return (
            <div>
                <h2>{this.props.params.repoName}</h2>
            </div>
        )
    }
})