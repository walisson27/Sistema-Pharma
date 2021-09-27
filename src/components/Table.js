import { Frente } from "./Frente";

export const Table = ({ user }) => (
  <tr>
    <td>{user.name.first}</td>
    <td>{user.gender}</td>
    <td>{new Date(user.dob.date).toLocaleDateString()}</td>
    <td>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#popup${user.login.sha1}`}
      >
        VIEW
      </button>
      <Frente user={user} />
    </td>
  </tr>
);
