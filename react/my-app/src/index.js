import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square"
            onClick={props.onClick}>{props.value}
        </button>
    );
}

class Board extends React.Component {

    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
    }


    render() {
        var rows = []
        let squareCounter = 0;
        for (let j = 0; j < 3; j++) {
            let row = [] // empty array of columns
            for (let i = 0; i < 3; i++) {
                row.push(this.renderSquare(squareCounter))
                squareCounter++;
            }
            rows.push(<div key={j} className='board-row'>{row}</div>)
        }
        return (
            <div>{rows}</div>
        )
    }

}


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            isDescending: false,
            xIsNext: true,
        };

    }

    sortTable(table_id, sortColumn, isDescending) {
        var tableData = document.getElementById(table_id).getElementsByTagName('tbody').item(0);
        var rowData = tableData.getElementsByTagName('tr');
        for (var i = 0; i < rowData.length - 1; i++) {
            for (var j = 0; j < rowData.length - (i + 1); j++) {
                if (isDescending) {
                    if (Number(rowData.item(j).getElementsByTagName('td').item(sortColumn).innerHTML.replace(/[^0-9\.]+/g, "")) < Number(rowData.item(j + 1).getElementsByTagName('td').item(sortColumn).innerHTML.replace(/[^0-9\.]+/g, ""))) {
                        tableData.insertBefore(rowData.item(j + 1), rowData.item(j));
                    }
                } else {
                    if (Number(rowData.item(j).getElementsByTagName('td').item(sortColumn).innerHTML.replace(/[^0-9\.]+/g, "")) > Number(rowData.item(j + 1).getElementsByTagName('td').item(sortColumn).innerHTML.replace(/[^0-9\.]+/g, ""))) {
                        tableData.insertBefore(rowData.item(j + 1), rowData.item(j));
                    }
                }

            }
        }
    }


    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();        // if the game has alread been won 

        // or there is something in the squares
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }


    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });

        // undo the color
        var squares = document.getElementsByClassName("square")

        for (let i = 0; i < squares.length; i++) {
            const square = squares[i];
            square.setAttribute("class","square")

        }
    }

    render() {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <tr key={move}>
                    <td className={move === this.state.stepNumber ? 'isSelected' : ''}>
                        {move}
                    </td>
                    <td><button onClick={() => this.jumpTo(move)}>{desc}</button></td>
                </tr>

            );

        });


        let status;

        if (winner) {
            status = 'Winner' + winner;

            // high light the three boxes that have won


        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }


        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <table id="table-move">
                        <thead>
                            <tr>
                                <th onClick={() => {
                                    this.setState({
                                        isDescending: !this.state.isDescending
                                    })
                                    this.sortTable("table-move", 0, this.state.isDescending);

                                }}>Step</th>
                                <th>Jump</th>
                            </tr>
                        </thead>
                        <tbody>
                            {moves}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

            // select the cells corresponding to [a,b,c]
            // get all the buttons
            // you have an array of buttons
            // select the line combination
            // chanage its style

            var buttons = document.getElementsByTagName('button');
            buttons[a].setAttribute("class", "square square-bold")
            buttons[b].setAttribute("class", "square square-bold")
            buttons[c].setAttribute("class", "square square-bold")


            return squares[a];

        }
    }
    return null;
}
