import React, {Component} from "react";
import _ from "lodash";
import Fade from 'react-reveal/Fade'

export default class Table extends Component{
    render() {
        let {referenceString, frameNumber, algorithmLabel, algorithm, colorMap, resetTurns, swapToggle, animationToggle} = this.props;
        let {pageInMemArray, pageFaults, pageNotInMemArray} = algorithm(referenceString, frameNumber, resetTurns);
        let frameNumberArray = _.range(0, frameNumber, 1);
        return(
            <div>
                <label>{algorithmLabel + ":"}</label>
                <table className="table table-bordered table-sm table-custom-style">
                    <thead className="thead-dark">
                        <tr>
                            <th>Reference:</th>
                            {referenceString.map( r => (
                                animationToggle?
                                <Fade right><th className="table-cell-align-center">{r}</th></Fade>
                            : <th className="table-cell-align-center">{r}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                    {frameNumberArray.map( f =>(
                        <tr>
                            <th />
                            {pageInMemArray.map( r => (
                                animationToggle?
                                <Fade right><th className={colorMap.get(r[f]) + " table-cell-align-center"}>{r[f]}</th></Fade>
                            : <th className={colorMap.get(r[f]) + " table-cell-align-center"}>{r[f]}</th>
                            ))}
                        </tr>
                    ))}
                    {swapToggle ? frameNumberArray.map( f =>(
                        <tr className="thead-light">
                            <th />
                            {pageNotInMemArray.map( r => (
                                animationToggle?
                                <Fade right><th className="table-cell-align-center">{r[f]}</th></Fade>
                                    :<th className="table-cell-align-center">{r[f]}</th>
                            ))}
                        </tr>
                    )) : null}
                    <tr className="thead-dark">
                        <th>Page Fault:</th>
                        {pageFaults.map( f => (
                            animationToggle?
                            <Fade right><th className="table-cell-align-center">{f}</th></Fade>
                                :<th className="table-cell-align-center">{f}</th>
                        ))}
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}