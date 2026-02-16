import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { DynamicSomethingLoader, ReducersList } from "shared/lib/component/DynamicSomethingLoader";
import { AddNewComentActions, AddNewCommentReducer } from "../../model/slices/addNewCommentSlice";
import { getAddNewCommentError, getAddNewCommentText } from "../../model/selectors/addNewCommentSelectors";
import cls from "./AddNewComment.module.scss";
import { Input } from "../../../../shared/ui/Input/Input";
import { Button, ButtonTheme } from "../../../../shared/ui/Button/Button";
import { useAppDispatch } from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";

interface AddNewCommentProps {
  className?: string;
  onSendComment: (text : string)=>void
}

const AddNewComment = memo(({ className, onSendComment }: AddNewCommentProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddNewCommentText);
    const error = useSelector(getAddNewCommentError);
    const dispatch = useAppDispatch();

    const reducers : ReducersList = {
        addNewComment: AddNewCommentReducer,
    };

    const onCommentChangeText = useCallback((value : string) => {
        dispatch(AddNewComentActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || "");
        onCommentChangeText("");
    }, [dispatch, onCommentChangeText, onSendComment, text]);

    return (
        <DynamicSomethingLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.AddNewComment, [className])}>
                <Input className={cls.input} onChange={onCommentChangeText} value={text} placeholder={t("Введите комментарий")} />
                <Button onClick={onSendHandler} theme={ButtonTheme.OUTLINE}>{t("Отправить комментарий")}</Button>
            </div>
        </DynamicSomethingLoader>
    );
});

export default AddNewComment;
