

function SearchTask(props) {
  return (
    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" 
          value={props.value}
          onChange={(e) => props.onSearch(e)}
        />
        <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">
            <i className="fa fa-search" aria-hidden="true"></i>
        </button>
        </div>
    </div> 
  );
}

export default SearchTask;
