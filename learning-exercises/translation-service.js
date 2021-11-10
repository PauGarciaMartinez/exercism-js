export class TranslationService {
  constructor(api) {
    this.api = api;
  }
  
  free(text) {
    return this.api.fetch(text).then(res => res.translation);
  }
  
  batch(texts) {
    if (!texts.length) return Promise.reject(new BatchIsEmpty());
    return Promise.all(texts.map(text => this.free(text)));
  }
  
  request(text) {
    const req = () => new Promise((resolve, reject) => 
      this.api.request(text, error => error 
        ? reject(error) 
        : resolve(undefined)));
    return req()
      .catch(() => req())
      .catch(() => req());
  }
  
  premium(text, minimumQuality) {
    return this.api.fetch(text)
      .catch(() => this.request(text).then(() => this.api.fetch(text)))
      .then(response => {
        if (response.quality < minimumQuality) throw new QualityThresholdNotMet(text);
        return response.translation;
      });
  }
}

export class QualityThresholdNotMet extends Error {
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim()
    );
    this.text = text;
  }
}

export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim()
    );
  }
}
