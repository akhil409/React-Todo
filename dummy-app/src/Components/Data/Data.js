import React from "react";

const Data = (props) => { 
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <p className="text-center h2">My Todos</p>
        </div>
        <hr />
        <div className="card-text">
          <table className="table table-secondary">
            <thead>
              <tr>
                <th>Name</th>
                <th>Completed</th>
                <th>Incomplete</th>
              </tr>
            </thead>
            <tbody>
              {props.todos.length ? (
                <>
                  {props.todos.map((todo, index) => {
                    return (
                      <tr key={index}>
                        <td>{todo}</td>
                        <td></td>
                        <td></td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Data;
