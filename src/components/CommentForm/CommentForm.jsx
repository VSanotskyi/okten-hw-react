import {useForm} from "react-hook-form";
import {add} from "../../services/commentsApi";

const CommentForm = () => {
    const {register, reset, handleSubmit} = useForm();

    const addComment = async (comment) => {
        const res = await add(comment);
        if (!res) alert("Error");
        if (res) alert("Success");
        reset();
    };

    return (
        <form onSubmit={handleSubmit(addComment)}
              style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                  border: "1px solid black",
              }}
        >
            <label>
                Name
                <br/>
                <input type="text"
                       placeholder="Jon"
                       {...register("name")}
                />
            </label>
            <br/>
            <label>
                Please, write your comment
                <br/>
                <input type="text"
                       placeholder="write something..." {...register("body")}/>
            </label>
            <br/>
            <button style={{maxWidth: "150px"}}
                    type="submit"
            >Add comment
            </button>
        </form>
    );
};

export default CommentForm;