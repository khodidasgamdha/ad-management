import { useField } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
    Grid,
    Progress,
    Button,
    Flex,
    Spacer,
    Image,
    Text,
    Heading,
    Input,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { CloseIcon } from "@chakra-ui/icons";
import FileUploadIcon from "../../../../assets/images/file-upload-icon.png";
import DefaultImageIcon from "../../../../assets/images/default-image-icon.png";
import { TEXT_COLOR } from "../../../../layout/constant/MenuList";
import { useUploadFBImage } from "../../../../hooks/campaign-briefs/useUploadFBImage";
import { useRecoilValue } from "recoil";
import { profile } from "../../../../atoms/authAtom";
import { useParams } from "react-router-dom";

let currentId = 0;

export function FileUpload({ getHashArray }) {
    const { id } = useParams();

    const [_, __, helpers] = useField("files");
    const [files, setFiles] = useState([]);
    const [hashArray, setHashArray] = useState([]);

    const { mutateAsync } = useUploadFBImage();

    const {
        access_info: { clients },
    } = useRecoilValue(profile);

    const onDrop = useCallback(async (accFiles, rejFiles) => {
        await mutateAsync(
            {
                clientId: clients[0].id,
                campaignBriefId: id,
                adFile: accFiles[0],
            },
            {
                onSuccess: (data, variables, context) => {
                    setHashArray([data.fileInfoList[0]]);
                },
            }
        );

        const mappedAcc = accFiles.map((file) => ({
            file,
            errors: [],
            id: ++currentId,
        }));
        const mappedRej = rejFiles.map((r) => ({ ...r, id: ++currentId }));
        setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej]);
    }, []);

    useEffect(() => {
        getHashArray(hashArray);
    }, [hashArray]);

    useEffect(() => {
        helpers.setValue(files);
    }, [files]);

    function onDelete(file) {
        setFiles((curr) => curr.filter((fw) => fw.file !== file));
    }

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            "image/png": [".png"],
            "image/jpeg": [".jpg", ".jpeg"],
        },
        maxSize: 5 * 1024 * 1024, // 5MB
    });

    const formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return (
            parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
        );
    };

    return (
        <>
            <Formik initialValues={{ files: [] }}>
                {({ values, errors, isValid, isSubmitting }) => {
                    return (
                        <Form>
                            <Grid spacing={2} direction="column">
                                <Grid>
                                    <div {...getRootProps()}>
                                        <Input {...getInputProps()} />

                                        <div className="file-upload-content">
                                            <Image
                                                boxSize="100px"
                                                objectFit="cover"
                                                src={FileUploadIcon}
                                                alt="upload-icon"
                                            />
                                            <Heading
                                                fontSize="xl"
                                                mb={1}
                                                color={TEXT_COLOR}
                                            >
                                                Drag and drop files
                                            </Heading>
                                            <Heading
                                                fontSize="sm"
                                                mb={1}
                                                color={TEXT_COLOR}
                                            >
                                                or
                                            </Heading>
                                            <Button size="small">Browse</Button>
                                        </div>
                                    </div>
                                </Grid>

                                {files.map((fileWrapper, index) => {
                                    return (
                                        <Grid className="file-box" key={index}>
                                            <Flex>
                                                <Image
                                                    boxSize="50px"
                                                    objectFit="cover"
                                                    src={DefaultImageIcon}
                                                    alt="Dan Abramov"
                                                />
                                                <div>
                                                    <Grid>
                                                        <Text
                                                            fontSize="lg"
                                                            mb={1}
                                                            className="file-name"
                                                        >
                                                            {
                                                                fileWrapper.file
                                                                    .name
                                                            }
                                                        </Text>
                                                    </Grid>
                                                    <Text fontSize="sm">
                                                        {formatBytes(
                                                            fileWrapper.file
                                                                .size
                                                        )}
                                                    </Text>
                                                </div>
                                                <Spacer />
                                                <Grid>
                                                    <CloseIcon
                                                        className="close-icon"
                                                        size="small"
                                                        onClick={() =>
                                                            onDelete(
                                                                fileWrapper.file
                                                            )
                                                        }
                                                    />
                                                </Grid>
                                            </Flex>

                                            <Progress
                                                className="loading"
                                                value={100}
                                            />
                                        </Grid>
                                    );
                                })}

                                <Grid>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disabled={!isValid || isSubmitting}
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
}
