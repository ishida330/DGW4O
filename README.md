# DGW4O
IBM DataServer Gateway for ODataをjsで使うサンプル

- Qiitaの記事[「Db2のテーブルをOData(JSON)で簡単に操作できる! IBM Data Server Gateway for OData を触ってみた」](https://qiita.com/ishida330/items/b0f2e95464454257da04)のサンプルです。
- JSからプロキシ―を経由せず直接ODATA要求を出しています。記事にありますが、CORS制約を回避するためにコンテンツはWAS Libertyの配下に置いてください。
