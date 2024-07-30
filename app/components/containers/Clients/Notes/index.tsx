import React, { useState, FC, useEffect } from "react";
import Image from "next/image";
import ActionButton from "@/app/components/shared/ActionButton";
import Button from "@/app/components/shared/Button";
import TextField from "@/app/components/shared/TextField";
import Select, { SelectOption } from "@/app/components/shared/Select";
import FileUploader from "@/app/components/shared/FileUploader";
import TextEditor from "@/app/components/shared/TextEditor";
import moment from "moment";
import TagsField from "@/app/components/shared/TagsField";

const tagOptions: SelectOption[] = [
  { value: 1, label: "TAG ONE" },
  { value: 2, label: "TAG TWO" },
];

interface Note {
  id: number;
  title?: string;
  content?: string;
  tags?: string[];
  files?: File[];
  time: Date;
}

const Notes: FC = () => {
  const [selectedNote, setSelectedNote] = useState<number | null>(null);
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Title 2024-07-19 17:55",
      content: "Content 2024-07-19 17:55",
      time: new Date("2024-07-19 17:55"),
    },
    {
      id: 2,
      title: "Title 2024-07-18 17:55",
      content: "Content 2024-07-18 17:55",
      time: new Date("2024-07-18 17:55"),
    },
    {
      id: 3,
      title: "Title 2024-07-17 17:55",
      content: "Content 2024-07-17 17:55",
      time: new Date("2024-07-17 17:55"),
    },
    {
      id: 4,
      title: "Title 2024-07-17 16:55",
      content: "Content 2024-07-17 16:55",
      time: new Date("2024-07-17 16:55"),
    },
    {
      id: 5,
      title: "Title 2024-07-11 17:55",
      content: "Content 2024-07-11 17:55",
      time: new Date("2024-07-11 17:55"),
    },
    {
      id: 6,
      title: "Title 2024-07-09 17:55",
      content: "Content 2024-07-09 17:55",
      time: new Date("2024-07-09 17:55"),
    },
    {
      id: 7,
      title: "Title 2024-07-05 17:55",
      content: "Content 2024-07-05 17:55",
      time: new Date("2024-07-05 17:55"),
    },
  ]);

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  const handleFilesAdded = (newFiles: File[]) => {
    setFiles([...files, ...newFiles]);
  };

  const handleSave = () => {
    if (!selectedNote) {
      const now = new Date();
      setNotes([
        ...notes,
        {
          id: now.getTime(),
          title,
          content,
          tags,
          files,
          time: now,
        },
      ]);
      setSelectedNote(now.getTime());
    } else {
      const index = notes.findIndex((note: Note) => note.id === selectedNote);
      const clonedNotes = [...notes];
      clonedNotes.splice(index, 1, {
        ...clonedNotes[index],
        title,
        content,
        tags,
        files,
        time: new Date(),
      });

      setNotes([...clonedNotes]);
    }

    setIsEdit(false);
  };

  const getTodayNotes = () => {
    const today = moment().format("YYYY-MM-DD");
    return notes
      .filter((note: Note) => moment(note.time).format("YYYY-MM-DD") === today)
      .sort(
        (a: Note, b: Note) =>
          moment(b.time).valueOf() - moment(a.time).valueOf()
      );
  };

  const getLast7daysNotes = () => {
    const startOf = moment().subtract(7, "days").startOf("day");
    const endOf = moment().subtract(1, "days").endOf("day");

    return notes.filter((note: Note) => {
      const time = moment(note.time);
      return time.isBetween(startOf, endOf);
    });
  };

  const getLast30daysNotes = () => {
    const startOf = moment().subtract(30, "days").startOf("day");
    const endOf = moment().subtract(7, "days").startOf("day");

    return notes.filter((note: Note) => {
      const time = moment(note.time);
      return time.isBetween(startOf, endOf);
    });
  };

  useEffect(() => {
    const note: Note = notes.filter(
      (item: Note) => item.id === selectedNote
    )[0];
    setTitle(note?.title || "");
    setContent(note?.content || "");
    setTags(note?.tags || []);
    setFiles(note?.files || []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNote]);

  const NotePreviewCard: FC<Note> = (props) => {
    const handleClick = () => {
      setSelectedNote(props.id);
      setIsEdit(false);
    };

    return (
      <div
        className={`bg-black hover:bg-warning hover:text-black ${
          props.id === selectedNote ? `bg-warning text-black` : `text-white`
        } p-3 grid gap-1 font-jost cursor-pointer`}
        onClick={handleClick}
      >
        <p className="font-semibold text-base underline line-clamp-1">
          {props.title}
        </p>
        {props.content && (
          <p
            className="text-xs leading-6 line-clamp-1"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        )}
      </div>
    );
  };

  useEffect(() => {
    const todayNotes = getTodayNotes();
    if (todayNotes.length > 0) setSelectedNote(todayNotes[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex gap-8 items-start">
      <div className="w-full max-w-[280px] flex-shrink-0 grid gap-[18px]">
        <Button
          variant="outlined"
          color="warning"
          fullWidth
          onClick={() => setSelectedNote(null)}
        >
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/plus-warning.png"
              width={24}
              height={24}
              alt="New Note"
            />
            <span>New Note</span>
          </div>
        </Button>
        <div className="grid gap-6">
          <div className="grid gap-1.5">
            <p className="font-jost uppercase font-semibold text-xs">Today</p>
            <div className="grid gap-[1px]">
              {getTodayNotes().map((note: Note, index: number) => (
                <NotePreviewCard key={index} {...note} />
              ))}
            </div>
          </div>
          <div className="grid gap-1.5">
            <p className="font-jost uppercase font-semibold text-xs">
              Last 7 Days
            </p>
            <div className="grid gap-[1px]">
              {getLast7daysNotes().map((note: Note, index: number) => (
                <NotePreviewCard key={index} {...note} />
              ))}
            </div>
          </div>
          <div className="grid gap-1.5">
            <p className="font-jost uppercase font-semibold text-xs">
              Last 30 Days
            </p>
            <div className="grid gap-[1px]">
              {getLast30daysNotes().map((note: Note, index: number) => (
                <NotePreviewCard key={index} {...note} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid bg-[#1F2437] shadow-lg rounded-sm px-10 pt-3 pb-9">
        <div>
          <div className="flex justify-end">
            <ActionButton icon="/trash-white.png" position="right">
              Delete Note
            </ActionButton>
            {isEdit || !selectedNote ? (
              <ActionButton icon="/copy.png" position="right">
                Copy Note
              </ActionButton>
            ) : (
              <ActionButton
                icon="/images/dashboard/pen.png"
                position="right"
                onClick={() => setIsEdit(true)}
              >
                Edit Note
              </ActionButton>
            )}
            <ActionButton icon="/send-white.png" position="right">
              Share Note
            </ActionButton>
          </div>
          {isEdit || !selectedNote ? (
            <div className="grid gap-8">
              <div className="grid gap-6">
                <TextField
                  size="lg"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  label="Title"
                  className="bg-table-odd"
                />
                <TextEditor
                  value={content}
                  onChange={(data: string) => setContent(data)}
                  label="Description"
                />
                <TagsField
                  value={tags}
                  onChange={(e) => setTags(e)}
                  label="Tags"
                />
                <FileUploader onFilesAdded={handleFilesAdded} />
              </div>
              <div className="flex justify-end">
                <Button
                  className="w-[234px]"
                  color="warning"
                  onClick={handleSave}
                >
                  Save Note
                </Button>
              </div>
            </div>
          ) : (
            <div className="pt-2 pb-1">
              {title && (
                <p className="font-jost font-semibold text-[32px] mb-6">
                  {title}
                </p>
              )}
              {content && (
                <div
                  className="mb-10 font-jost text-base"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}
              {tags.length > 0 && (
                <ul className="flex flex-wrap gap-8">
                  {tags.map((tag: string) => (
                    <li
                      key={tag}
                      className="font-jost font-bold text-black text-xs bg-info rounded-sm p-2"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;
