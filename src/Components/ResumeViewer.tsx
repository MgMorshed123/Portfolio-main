import {
  ActionIcon,
  Modal,
  ScrollArea,
  Tooltip,
  useMatches,
  Loader,
  Center,
} from "@mantine/core";
import { IconArrowBigDownLineFilled } from "@tabler/icons-react";
import { Document, Page } from "react-pdf";
import { Info } from "../User";
import { useState } from "react";

const ResumeViewer = (props: any) => {
  const [loading, setLoading] = useState(true);

  const btn = useMatches({
    xs: "xs",
    sm: "sm",
    md: "md",
  });

  const onDocumentLoadSuccess = () => {
    setLoading(false);
  };

  const onDocumentLoadError = () => {
    setLoading(false);
  };

  return (
    <Modal.Root
      scrollAreaComponent={ScrollArea.Autosize}
      size="auto"
      centered
      className=" font-mono"
      opened={props.opened}
      onClose={props.close}
    >
      <Modal.Overlay className="!backdrop-opacity-85 blur-sm" />
      <Modal.Content className="!rounded-3xl max-w-2xl">
        <Modal.Header className="!bg-bgColor xs-mx:!p-2 !border-primaryColor xs-mx:!border  !border-2 xs-mx:!border-b-0 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
          <Modal.Title
            data-autofocus
            className="!text-4xl xs-mx:!text-2xl text-white flex gap-3 items-center !font-bold"
          >
            Resume
            <Tooltip
              label="Download"
              className="!text-bgColor"
              color="#64FFDA"
              position="right"
              offset={5}
            >
              <ActionIcon
                className="!text-primaryColor"
                component="a"
                href="MorshedC.pdf"
                size={btn}
                download={Info.name}
                variant="outline"
                color="#64FFDA"
              >
                <IconArrowBigDownLineFilled className=" xs-mx:!w-[16px] xs-mx:!h-" />
              </ActionIcon>
            </Tooltip>
          </Modal.Title>
          <Modal.CloseButton
            size="md"
            iconSize="30px"
            className="!bg-bgColor !text-red-500"
          />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor xs-mx:!p-2 !pt-2 !border-primaryColor  !border-2 xs-mx:!border xs-mx:!border-t-0 !border-t-0 !rounded-bl-3xl !rounded-br-3xl flex justify-center items-center min-h-96">
          {loading && (
            <Center>
              <Loader color="#64FFDA" />
            </Center>
          )}
          <Document
            className="w-full !rounded-2xl !overflow-hidden"
            file="MorshedC.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<Loader color="#64FFDA" />}
          >
            <Page
              pageNumber={1}
              width={500}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
export default ResumeViewer;
