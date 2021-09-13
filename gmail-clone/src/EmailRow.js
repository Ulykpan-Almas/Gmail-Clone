import React from 'react'
import "./EmailRow.css"
import { Checkbox, IconButton } from "@material-ui/core";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import StarIcon from "@material-ui/icons/Star";
import { useHistory } from "react-router-dom";
import { selectMail } from "./features/counter/mailSlice";
import { useDispatch } from "react-redux";

function EmailRow({ id, starred, to, subject, description, time }) {
   
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
		dispatch(
			selectMail({
				id,
				starred,
				to,
				subject,
				description,
				time,
			})
		);
		history.push("/mail");
	};

    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow__options">
				<Checkbox />
				<IconButton>
                     <StarBorderOutlinedIcon />
				</IconButton>
				<IconButton>
					<LabelImportantOutlinedIcon />
				</IconButton>
			</div>

            <div className="emailRow__title">{to}</div>

            <div className="emailRow__message">
                {subject}
            <span className="emailRow__description"> - {description}</span></div>

            <p className="emailRow__time">{time}</p>
        </div>
    )
}

export default EmailRow
