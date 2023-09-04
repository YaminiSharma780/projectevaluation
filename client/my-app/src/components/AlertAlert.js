import Alert from "react-bootstrap/Alert";

export default function AlertAlert(props) {
  return (
    <div style={{ marginTop: "56px", height: "80px" }}>
      {props.alert && (
        <div>
          <Alert variant={props.alert.type} dismissible>
            <strong>{props.alert.type} </strong>: {props.alert.message}
          </Alert>
        </div>
      )}
    </div>
  );
}
