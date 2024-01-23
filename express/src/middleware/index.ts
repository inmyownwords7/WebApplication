// import express, { Request, Response, NextFunction } from 'express';
// // import db from '../db';
// let database = process.env.DB

// interface Database {
//   id: number;
//   title: string;
//   completed: boolean;
//   url: string;
// }

// // function fetchDb(req: Request, res: Response, next: NextFunction): void {
// //   db.all(`SELECT * FROM ${database} WHERE owner_id = ?`, [req.user.id], (err, rows) => {
// //     if (err) {
// //       return next(err);
// //     }

// //     // const searchDb: Database[] = rows.map((row) => ({
// //     //   id: row.id,
// //     //   title: row.title,
// //     //   completed: row.completed === 1,
// //     //   url: '/' + row.id,
// //     // }));

// //     // res.locals.Db = searchDb;
// //     // res.locals.activeCount = searchDb.filter((todo) => !todo.completed).length;
// //     // res.locals.completedCount = searchDb.length - res.locals.activeCount;

// //     next();
// //   });
// // }

// // const router = express.Router();

// // router.post('/', (req: Request, res: Response, next: NextFunction) => {
// //   req.body.title = req.body.title.trim();
// //   next();
// // }, (req: Request, res: Response, next: NextFunction) => {
// //   if (req.body.title !== '') {
// //     return next();
// //   }
// //   return res.redirect('/' + (req.body.filter || ''));
// // }, (req: Request, res: Response, next: NextFunction) => {
// //   db.run(
// //     `INSERT INTO ${database} (owner_id, title, completed) VALUES (?, ?, ?)`,
// //     [req.user.id, req.body.title, req.body.completed === true ? 1 : null],
// //     (err) => {
// //       if (err) {
// //         return next(err);
// //       }
// //       return res.redirect('/' + (req.body.filter || ''));
// //     }
// //   );
// // });

// // router.post('/:id(\\d+)', (req: Request, res: Response, next: NextFunction) => {
// //   req.body.title = req.body.title.trim();
// //   next();
// // }, (req: Request, res: Response, next: NextFunction) => {
// //   if (req.body.title !== '') {
// //     return next();
// //   }
// //   db.run(
// //     `DELETE FROM ${database} WHERE id = ? AND owner_id = ?`,
// //     [req.params.id, req.user.id],
// //     (err) => {
// //       if (err) {
// //         return next(err);
// //       }
// //       return res.redirect('/' + (req.body.filter || ''));
// //     }
// //   );
// // }, (req: Request, res: Response, next: NextFunction) => {
// //   db.run(
// //     `UPDATE ${database} SET title = ?, completed = ? WHERE id = ? AND owner_id = ?`,
// //     [req.body.title, req.body.completed !== undefined ? 1 : null, req.params.id, req.user.id],
// //     (err) => {
// //       if (err) {
// //         return next(err);
// //       }
// //       return res.redirect('/' + (req.body.filter || ''));
// //     }
// //   );
// // });

// // router.post('/:id(\\d+)/delete', (req: Request, res: Response, next: NextFunction) => {
// //   db.run(
// //     `DELETE FROM ${database} WHERE id = ? AND owner_id = ?`,
// //     [req.params.id, req.user.id],
// //     (err) => {
// //       if (err) {
// //         return next(err);
// //       }
// //       return res.redirect('/' + (req.body.filter || ''));
// //     }
// //   );
// // });

// // router.post('/toggle-all', (req: Request, res: Response, next: NextFunction) => {
// //   db.run(
// //     `UPDATE ${database} SET completed = ? WHERE owner_id = ?`,
// //     [req.body.completed !== undefined ? 1 : null, req.user.id],
// //     (err) => {
// //       if (err) {
// //         return next(err);
// //       }
// //       return res.redirect('/' + (req.body.filter || ''));
// //     }
// //   );
// // });

// // router.post('/clear-completed', (req: Request, res: Response, next: NextFunction) => {
// //   db.run(
// //     `DELETE FROM ${database} WHERE owner_id = ? AND completed = ?`,
// //     [req.user.id, 1],
// //     (err) => {
// //       if (err) {
// //         return next(err);
// //       }
// //       return res.redirect('/' + (req.body.filter || ''));
// //     }
// //   );
// // });

// export = router;
