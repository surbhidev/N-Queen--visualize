import React, { Component } from "react";
import { visualize } from "./visualization";
import { createBoard } from "./board";
import "./nQueens.css";

const SIZE_OF_BOARD = 8;

export default class NQueens extends Component {
    componentDidMount() {
        createBoard(SIZE_OF_BOARD);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-12">
                                <center>
                                    <h2>N-Queens Visualizer</h2>
                                </center>
                            </div>
                        </div>
                        <div className="box board mb-2" id="board">
                            {/* Board will be generated here */}
                        </div>
                        <div className="row">
                            <div className="input-group mt-3 ml-1 container col-sm-6">
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => visualize()}
                                    >
                                        Visualize N-Queens
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Iterations" className="col-sm-4 mt-3">
                        <h3>Solution Steps:</h3>
                        <ol></ol>
                    </div>
                </div>
            </div>
        );
    }
}