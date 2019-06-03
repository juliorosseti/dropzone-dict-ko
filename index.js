/**
 * Dropzone Default Language Translate Pack
 *
 * @lang Portuguese (Brazil)
 * @lang-ISO pt-BR
 *
 * @forked https://github.com/sople1/dropzone-dict-ko
 * @author Júlio Rosseti (julio@rosseti.xyz) @juliorosseti
 * @license Public Domain
 * @see https://github.com/juliorosseti/dropzone-dict-pt-BR
 */
import Dropzone from 'dropzone'

Dropzone.prototype.defaultOptions = {
  ...Dropzone.prototype.defaultOptions,
  ...{
    dictDefaultMessage: "Solte aqui os arquivos para enviar", // Drop files here to upload";
    dictFallbackMessage: "Seu navegador não suporta uploads de arrastar e soltar.", // Your browser does not support drag'n'drop file uploads.";
    dictFallbackText: "Por favor, use o formulário abaixo para enviar seus arquivos como antigamente.", // Please use the fallback form below to upload your files like in the olden days.";
    dictFileTooBig: "O arquivo é muito grande ({{filesize}}MB). Tamanho máximo permitido: {{maxFilesize}}MB.", // File is too big ({{filesize}}MB). Max filesize: {{maxFilesize}}MB.";
    dictInvalidFileType: "Você não pode fazer upload de arquivos desse tipo.", // You can't upload files of this type.";
    dictResponseError: "O servidor respondeu com o código {{statusCode}}.", // Server responded with {{statusCode}} code.";
    dictCancelUpload: "Cancelar envio", // Cancel upload";
    dictCancelUploadConfirmation: "Tem certeza de que deseja cancelar este envio?", // Are you sure you want to cancel this upload?";
    dictRemoveFile: "Remover arquivo", // Remove file";
    dictRemoveFileConfirmation: null, // null;
    dictMaxFilesExceeded: "Você só pode fazer upload de {{maxFiles}} arquivos.", // You can only upload {{maxFiles}} files.";
  }
}