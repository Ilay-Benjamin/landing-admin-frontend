import Item from '../../models/Item';
import Department from '../../models/Department';
import { contactEditorConfig } from '../../config/app/UI/ContactEditor/ContactEditor.config';
import services from '../../services/ContactEditor/ContactEditor.services';



export function enableEditMode(changes, setChanges, focusedEditor, setFocusedEditor, isEditorDisabled, setIsEditorDisabled, toAppend = false) {
     const enableEditMode = (toAppend = false) => {
          if (isEditorDisabled) {
               if (toAppend) {
                    if (focusedEditor !== null) {
                         setFocusedEditor(null);
                    }
                    setFocusedEditor({
                         item: Item.getEmptyItem(),
                         departmentId: "",
                         settings: {
                              isAppendMode: true
                         }
                    });
                    setChanges(Item.getEmptyItem());
               } else {
                    setFocusedEditor.settings.isAppendMode = false;
                    
                    setChanges(Item.clone(focusedEditor));
               }
               alert('מצב עריכה מופעל.');
          } else {
               alert('מצב עריכה כבר פעיל.');
          }
     }

     const disableEditMode = () => {
          if (!isEditorDisabled) {


     const onSaveContactAction = async (event) => {
          event.preventDefault();
          var departmentId = focusedEditor.departmentId;
          var item = changes;
          if (item !== null) {
               const prompt = 'איש הקשר יעודכן במאגר הנתונים. האם אתה בטוח שברצונך להמשיך?';
               if (window.confirm(prompt)) {
                   await services.updateContact(departmentId, item.id, item);
                   alert('השינויים נשמרו בהצלחה.');
                   setFocusedEditor({
                         item: item,
                         departmentId: departmentId
                       });
                   }
                   s
                } else {
                   alert('לא נשמרו שינויים.');
                }
          } else {
               alert('Cannot save changes to null item');
          }
     }

     const cancelContactAction = (event) => {
          event.preventDefault();
          setChanges(null);
          alert('יציאה ממצב עריכה. כל השינויים בוטלו.');
          setIsEditorDisabled(false);          
     }
